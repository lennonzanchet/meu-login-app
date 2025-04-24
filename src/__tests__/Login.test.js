/* eslint-env jest */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../paginas/Login"; // Ajuste o caminho se necessário

describe("Login Component", () => {
  test("renderiza o título da página de login", () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("existe um campo de email", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  test("existe um campo de senha", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
  });

  test("existe um botão de login", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  test("mostra erro se o usuário clicar em login sem preencher os campos", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));
    expect(screen.getByText(/preencha todos os campos/i)).toBeInTheDocument();
  });
});
