import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container p-5">
        <h4>1. Difference between javascript and nodejs ?</h4>
        <p>
          JavaScript is a proper high-level programming language used to create
          web scripts whereas Node. js is a run time environment built on
          google's v8 engine. JavaScript is executed in the browser whereas
          using Node. js gives us the ability to execute JavaScript outside the
          browser.
        </p>

        <h4>2. When should you use nodejs and when should you use mongodb ?</h4>
        <p>
          MongoDB represents the data as a collection of documents rather than
          tables related by foreign keys. This makes it possible for the varied
          types of data dealt over the internet to be stored decently and
          accessed in the web applications using Node. js.
        </p>

        <h4>3. Differences between sql and nosql databases. ?</h4>
        <p>
          <li>
            SQL databases are relational, NoSQL databases are non-relational.
          </li>
          <li>
            SQL databases use structured query language and have a predefined
            schema. .
          </li>
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
        </p>

        <h4>4. What is the purpose of jwt and how does it work ?</h4>
        <p>
          <li>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </li>
          <li>
            t works this way: the server generates a token that certifies the
            user identity, and sends it to the client. The client will send the
            token back to the server for every subsequent request, so the server
            knows the request comes from a particular identity.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
