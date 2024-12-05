import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Controle de exibição do menu

  // Função para alternar a visibilidade do menu
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#9c27b0' }}> {/* Cor roxa */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick} // Altera o estado para abrir/fechar o menu
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif' }}>
            Gerenciamento de Projetos
          </Typography>
          <Button color="inherit" sx={{ backgroundColor: '#ffeb3b', color: 'black', '&:hover': { backgroundColor: '#fbc02d' } }}>Login</Button> {/* Botão amarelo */}
        </Toolbar>
      </AppBar>

      {/* Menu que aparece quando o ícone de menu é clicado */}
      {menuOpen && (
        <Box sx={{
          position: 'absolute',
          top: 64,
          left: 0,
          backgroundColor: '#fff',
          width: '200px',
          boxShadow: 3,
          borderRadius: '4px',
          zIndex: 10
        }}>
          <Typography sx={{ padding: '10px', color: '#333' }}>Menu Item 1</Typography>
          <Typography sx={{ padding: '10px', color: '#333' }}>Menu Item 2</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Header;
