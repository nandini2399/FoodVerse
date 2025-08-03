import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { TextEncoder, TextDecoder } from 'util';
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom"

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


it("Should load header component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>

        </BrowserRouter>
        
    );

    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})

it("Should load header component with a Groceries button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>

        </BrowserRouter>
        
    );

    const loginButton = screen.getByText(/Grocer/);
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})

it("Should change login button to logout",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>

        </BrowserRouter>
        
    );

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})