import React from "react"; // Adicione essa linha no topo
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Login"; // Certifique-se de que o caminho está correto para o componente

describe('Login Component', () => {
  test('renderiza o título da página de login', () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('existe um campo de email', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/E-mail/)).toBeInTheDocument();
  });

  test('existe um campo de senha', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
  });

  test('existe um botão de login', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /Acessar/ })).toBeInTheDocument();
  });

  test('exibe mensagem de sucesso quando email e senha estão corretos', () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "eduardo.lino@pucpr.br" },
    });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), {
      target: { value: "123456" },
    });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(screen.getByText(/acessado com sucesso/i)).toBeInTheDocument();
  });

  test('exibe mensagem de erro quando email e senha estão corretos', () => {
    render(<Login />);
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(screen.getByText(/Usuário ou senha incorretos!/i)).toBeInTheDocument();
  });
  
});
