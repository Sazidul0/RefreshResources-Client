import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blog-container'>
            <h2 className=''>1.What is the difference between javascript and nodejs?</h2>
            <p><b className='ms-4'>Javascript</b><br />
                <ul>
                    <li>Javascript is a programming language that is used for writing scripts on the website. </li>  <br />
                    <li>Javascript can only be run in the browsers.</li>  <br />
                    <li>It is basically used on the client-side</li>  <br />
                    <li>Javascript is capable enough to add HTML and play with the DOM. </li>  <br />
                    <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>  <br />
                </ul>
            </p>
            <p><b className='ms-4'>NodeJS</b> <br />
                <ul>
                    <li>NodeJS is a Javascript runtime environment.</li>  <br />
                    <li>We can run Javascript outside the browser with the help of NodeJS.</li>  <br />
                    <li>It is mostly used on the server-side.</li>  <br />
                    <li>Nodejs does not have capability to add HTML tags.</li>  <br />
                    <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>  <br />
                </ul></p>



            <h2>2.When should we use nodejs and when should we use mongodb?</h2>
            <p>Any project needs a programming environment and a runtime library that offers us basic programming tools/support and can compile and/or interpret our code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc.
                <br />
                If our application needs the ability to persistently store data in a way that we can efficiently query or update it later, then we would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.
            </p>


            <h2>3.What is the differences between sql and nosql databases?</h2>
            <p><b className='ms-4'>SQL</b> <br />
                <ul>
                    <li>Relational Database Management System</li>  <br />
                    <li>These databases have fixed or static or predefined schema.</li>  <br />
                    <li>These databases are not suited for hierarchical data storage.</li>  <br />
                    <li>These databases are best suited for complex queries</li>  <br />
                    <li>Vertically Scalable</li>  <br />
                </ul>
            </p>
            <p><b className='ms-4'>NoSQL</b> <br />
                <ul>
                    <li>Non-relational or distributed database system.</li>  <br />
                    <li>They have dynamic schema</li>  <br />
                    <li>These databases are best suited for hierarchical data storage.</li>  <br />
                    <li>These databases are not so good for complex queries</li>  <br />
                    <li>Horizontally scalable</li>  <br />
                </ul>
            </p>


            <h2>4.What is the purpose of jwt and how does it work?</h2>
            <p>
                We use JWT to secure our website, so that anyone can can't watch others information. With JWT User Exprience is more batter. <br />
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </p>
        </div>
    );
};

export default Blogs;