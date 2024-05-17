import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: '#07139e',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export default function Breadcrumb({name}) {
  return (
    <div role="presentation" style={{padding: 8, margin: "64px 4px 0 4px", border: "1px solid #fcbb42", borderRadius: 8, }}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/client"
          label="Главное окно"
          сolor='secondary'
          icon={<ArrowBackIosNewRoundedIcon fontSize="small" color='secondary' />}
        />
        <StyledBreadcrumb
          label={name}          
        />
      </Breadcrumbs>
    </div>
  );
}