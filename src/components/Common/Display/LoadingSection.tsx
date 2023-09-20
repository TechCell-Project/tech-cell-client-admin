'use client';

import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { HashLoader } from 'react-spinners';

export const LoadingSection = ({
  isLoading,
  heightSection = 600,
}: {
  isLoading: boolean;
  heightSection?: number;
}) => {
  const theme = useTheme();

  return (
    <Stack width="100%" height={heightSection} justifyContent="center" alignItems="center" gap={2}>
      <HashLoader color={theme.color.red} loading={isLoading} size={45} speedMultiplier={0.8} />
      <Typography variant="caption" fontWeight={600}>
        Đang tải ...
      </Typography>
    </Stack>
  );
};
