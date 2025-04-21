import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";


export default function ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  return (
    <Box
      component="form"
      onSubmit={(e) => {e.preventDefault()}}
      sx={{ 
        width: '450px', 
        display: "flex", 
        mx: 'auto',
        flexDirection: "column", 
        gap: 2,
      }}
    >
      <TextField
        label="Имя"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'black'
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black'
          }
        }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'black'
            }
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black'
          }
        }}
      />
      <Button 
        type="submit" 
        variant="contained"
        sx={{
          bgcolor: 'black',        
          color: 'white',         
          '&:hover': {
            bgcolor: '#333'        
          }
        }}
      >
        Отправить
      </Button>
    </Box>
  );
}