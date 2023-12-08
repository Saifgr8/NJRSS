import React, { useState } from "react";

function Section({ title, content, isVisible, setVisible }) {
  return (
    <div className="m-2 p-2 shadow-2xl">
      <h2 className="text-xl font-bold">{title}</h2>
      {isVisible ? (
        <button onClick={() => setVisible()} className="cursor-pointer underline">
          Hide
        </button>
      ) : (
        <button onClick={() => setVisible()} className="cursor-pointer underline">
          Show
        </button>
      )}
      {isVisible && <h5>{content}</h5>}
    </div>
  );
}

const Contact = () => {
  const [sectionVisible, setSectionVisible] = useState("");

  return (
    <div>
      <Section
        title="About"
        content="Laborum ad eiusmod aliquip et sunt officia eu Lorem magna aliqua ex dolor. Anim elit mollit est aliqua ut irure voluptate. Quis qui amet enim cillum eiusmod aute. Ex ut nisi dolore est nostrud excepteur voluptate. Do consequat qui minim cillum cillum qui ea consectetur minim. Adipisicing non Lorem aute veniam veniam ex aliquip tempor minim proident incididunt exercitation est. Quis irure ipsum nisi laborum aliqua irure commodo proident reprehenderit."
        isVisible={sectionVisible === "about"}
        setVisible={() => {
          setSectionVisible(sectionVisible == "about" ? null : "about")
        }}
      />
      <Section
        title="Contact"
        content="Laborum ad eiusmod aliquip et sunt officia eu Lorem magna aliqua ex dolor. Anim elit mollit est aliqua ut irure voluptate. Quis qui amet enim cillum eiusmod aute. Ex ut nisi dolore est nostrud excepteur voluptate. Do consequat qui minim cillum cillum qui ea consectetur minim. Adipisicing non Lorem aute veniam veniam ex aliquip tempor minim proident incididunt exercitation est. Quis irure ipsum nisi laborum aliqua irure commodo proident reprehenderit."
        isVisible={sectionVisible === "contact"}
        setVisible={() => {
          if(sectionVisible === "contact"){
            return setSectionVisible(null);
          }
          else{
            setSectionVisible("contact")
          }
        }}
      />
      <Section
        title="Team"
        content="Laborum ad eiusmod aliquip et sunt officia eu Lorem magna aliqua ex dolor. Anim elit mollit est aliqua ut irure voluptate. Quis qui amet enim cillum eiusmod aute. Ex ut nisi dolore est nostrud excepteur voluptate. Do consequat qui minim cillum cillum qui ea consectetur minim. Adipisicing non Lorem aute veniam veniam ex aliquip tempor minim proident incididunt exercitation est. Quis irure ipsum nisi laborum aliqua irure commodo proident reprehenderit."
        isVisible={sectionVisible === "team"}
        setVisible={() => {
          if(sectionVisible === "team"){
            return setSectionVisible(null);
          }
          else{
            setSectionVisible("team")
          }
        }}
      />
    </div>
  );
};

export default Contact;
