import { styled } from '@mui/system'
import { Box, Modal } from '@mui/material'

export const UIModalWrapper = styled(
  Modal,
)(({ theme, clickedIndex, index }) => ({}))

export const UIModalBox = styled(Box)(
  ({ theme, clickedIndex, index, width }) => ({
    backgroundColor: theme.palette.primary.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    boxShadow: 24,
    borderRadius: 10,
    padding: '20px',
    '&:focus-visible': { outline: 'none' },
  }),
)
