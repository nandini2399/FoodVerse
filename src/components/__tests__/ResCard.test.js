import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { TextEncoder, TextDecoder } from 'util';
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom"
import ResCard from "../ResCard";
import {withPromotedLabel} from "../ResCard";
import MOCKDATA from "../mocks/resDataMock.json" 

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


it("Should load restaurant data",()=>{
    render(<ResCard resData={MOCKDATA} />)

    const mockData = screen.getByText("Pizza Hut");
    expect(mockData).toBeInTheDocument();
})

it("Should render restaurant card component with promoted label", () => {
    const PromotedResCard = withPromotedLabel(ResCard); // Get the wrapped component
    render(<PromotedResCard resData={MOCKDATA} />);      // Pass the actual props here

    const label = screen.getByText("Open");
    expect(label).toBeInTheDocument();
});
