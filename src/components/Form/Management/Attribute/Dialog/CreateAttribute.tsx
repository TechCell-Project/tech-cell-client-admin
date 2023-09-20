import React from 'react';
import { ButtonCustom, ShowDialog } from '@components/Common';
import { CreateAttributeModel, PagingAttribute } from '@models/Attribute';
import { createOrEditValidate } from '@validate/attribute.validate';
import { Form, Formik, FormikHelpers } from 'formik';
import { Stack } from '@mui/material';
import { useAppDispatch } from '@store/store';
import { createNewAttribute, getAllAttributes } from '@store/slices/attributeSlice';
import { enqueueSnackbar } from 'notistack';
import { TextFieldCustom } from '@components/Common/FormGroup/TextFieldCustom';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const CreateAttribute = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: CreateAttributeModel,
    { resetForm, setSubmitting }: FormikHelpers<CreateAttributeModel>,
  ) => {
    try {
      const response = await dispatch(createNewAttribute(values));

      if (response?.success) {
        enqueueSnackbar('Thêm mới thông số thành công!', {
          variant: 'success',
        });
        dispatch(getAllAttributes(new PagingAttribute()));
        resetForm();
        props.handleClose();
      } else {
        enqueueSnackbar('Có lỗi xảy ra, Thêm mới thất bại!', {
          variant: 'error',
        });
      }
    } catch (error) {
      enqueueSnackbar('Có lỗi xảy ra, Thêm mới thất bại!', {
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ShowDialog
      dialogTitle="Thêm mới thông số"
      handleClose={props.handleClose}
      isOpen={props.isOpen}
      dialogStyle={{ minWidth: 420 }}
    >
      <Formik
        enableReinitialize
        initialValues={new CreateAttributeModel()}
        validationSchema={createOrEditValidate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              width: '100%',
              marginTop: '10px',
            }}
          >
            <>
              <Stack direction="column" gap={2} alignItems="center" justifyContent="center">
                <TextFieldCustom name="name" label="Tên thông số" />

                <TextFieldCustom name="label" label="# Label" />

                <TextFieldCustom
                  name="description"
                  label="Mô tả"
                  isTextArea
                  minRowArea={3}
                  maxRowArea={4}
                />
              </Stack>

              <Stack direction="row" justifyContent="flex-end" gap={2} sx={{ mt: 4 }}>
                <ButtonCustom variant="outlined" handleClick={props.handleClose} content="Hủy bỏ" />
                <ButtonCustom
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  content="Xác nhận"
                />
              </Stack>
            </>
          </Form>
        )}
      </Formik>
    </ShowDialog>
  );
};
