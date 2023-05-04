import React from "react";
import jsPDF from "jspdf";

const Blog = () => {
  let pdfExportComponent;
  const handleDownload = () => {
    const doc = new jsPDF();
    const content = pdfExportComponent;
  
    doc.html(content, {
      callback: function () {
        doc.save("blog.pdf");
      },
    });
  };
  
  return (
    <div className="my-10 bg-gray-200" ref={(el) => (pdfExportComponent = el)}>
      <div className="p-10">
        <h1 className="text-3xl font-extrabold mb-2">
          1. What is the Difference Between a Controlled and Uncontrolled
          Component in React?
        </h1>
        <p className="text-xl font-semibold">
          In React, a controlled component is a component that is controlled by
          React state, while an uncontrolled component is a component that
          maintains its own internal state. There are many differences. They
          are-
          <br />
          1. Controlled components value are managed by React state otherwise
          uncontrolled components value are managed by its own internal state.
          <br />
          2. In controlled components, data flows from parent component to
          component. On other hand, in uncontrolled components, data flows
          within the component.
          <br />
          3. Controlled components are easy to debug but uncontrolled components
          are difficult.
          <br />
          4. Code complexity are less complex in controlled components, in
          uncontrolled components code are more complex.
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-3xl font-extrabold mb-2">
          2. How to validate React props using PropTypes?
        </h1>
        <p className="text-xl font-semibold">
          In React, there are many different ways to validate React props using
          Prop validators. They are,
          <br />
          1. PropTypes.any: The props can be validate of any data type.
          <br />
          2. PropTypes.array: The props should be an array.
          <br />
          3. PropTypes.bool: The props should be a boolean.
          <br />
          4. PropTypes.func: The props should be a function.
          <br />
          5. PropTypes.number: The props should be a number.
          <br />
          By using these validators, you can validate react props.
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-3xl font-extrabold mb-2">
          3. Differences between Node.js and Express.js.
        </h1>
        <p className="text-xl font-semibold">
          Node.js and Express.js are two different technologies used in
          server-side web development. Node.js is a runtime environment that
          allows developers to use JavaScript on the server-side, while
          Express.js is a web framework built on top of Node.js that provides
          additional functionality for building web applications. Node.js
          provides a set of built-in modules that can be used to build
          server-side applications, while Express.js simplifies the process of
          building web applications by providing a set of pre-built features.{" "}
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-3xl font-extrabold mb-2">
          4. What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="text-xl font-semibold">
          A custom hook is a function that is called when a component is mounted
          or updated. The hook is a function that takes a single argument, which
          is the component instance. The hook is called when the component is
          mounted or updated.
          <br />
          Custom hooks can be easily reusable and has a great readability, so
          when I need to makes my code cleaner and reduce the time to write the
          code I will create a custom hook.
        </p>
      </div>
      <div className="p-10">
        <button onClick={handleDownload}>Download as PDF</button>
      </div>
    </div>
  );
};

export default Blog;
