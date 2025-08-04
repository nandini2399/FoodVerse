import { render,act,screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../Body";
import { TextEncoder, TextDecoder } from 'util';
import MOCK_DATA from "../mocks/bodyResDataMock.json"
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        })
    
})

it("Should be able to search ResCards",async()=>{
    
    await act(async()=>{
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        ) 
    })

    const searchButton = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"Pizza"}});
    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);

    
})

it("Should be able load top rated restaurants",async()=>{
    
    await act(async()=>{
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        ) 
    })

    const topRatedButton = screen.getByRole("button",{name:"Top Rated"});
    
    fireEvent.click(topRatedButton);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(5);
})