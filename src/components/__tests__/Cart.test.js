import { act, fireEvent } from "@testing-library/react";
import { render,screen } from "@testing-library/react";
import ResMenu from "../ResMenu"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/resMenuMock.json"
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore"
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
})

it("Should load Restaurant Menu component",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                 <Provider store={appStore}>
                    <Header />
                    <ResMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
           
        );
    })

    const accHeader = screen.getByText(/Rakhi Special/);
    fireEvent.click(accHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(4);

    const addBtns = screen.getAllByRole("button",{name:"ADD +"})
    
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("🛒1")).toBeInTheDocument()

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("🛒2")).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(4);
    expect(screen.getByText("Cart is empty. Add items to continue!")).toBeInTheDocument();
})