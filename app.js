const heading = React.createElement("h1",
     {id:"heading", xyz: "abc"}, "this is from react js file");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);