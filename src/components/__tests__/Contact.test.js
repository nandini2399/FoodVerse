const { render,screen } = require("@testing-library/react")
import "@testing-library/jest-dom"
import Contact from "../Contact"



 describe("Contact us page test cases",()=>{
    test('should have name as Nandini',()=>{
        render(<Contact />);

        const nameElement = screen.getByText(/Contact/i); 

    
    expect(nameElement).toBeInTheDocument(); 
    })

    test('should load contact page', () => { 
        render(<Contact />);

        //quering 
        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    })
 })