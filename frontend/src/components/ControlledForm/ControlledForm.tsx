import { useState } from "react";
import { TextField, Button, Box, Typography, Divider } from "@mui/material";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  return (
    <Box sx={{ width: '500px', mx: 'auto', mt: 4 }}>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 3 }}>
        Форма обратной связи
      </Typography>

      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <TextField
          label="Имя"
          name="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            })
          }
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#b8b8b8'
              }
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#b8b8b8'
            }
          }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
            })
          }
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#b8b8b8'
              }
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#b8b8b8'
            }
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: '#b8b8b8',
            color: 'black',
            '&:hover': {
              bgcolor: '#fff'
            }
          }}
        >
          Отправить
        </Button>
      </Box>
    </Box>
  );
}
