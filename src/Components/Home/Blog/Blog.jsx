import React from 'react';

const Blog = () => {
    return (
        <div className='mx-14 my-6'>
          <div>
            <h2><span className='text-orange-800 font-bold'>Question1:</span>
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h2>
            <p><span className='font-bold'>Answer:</span> Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them. <br />You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy.</p>
          </div>
          <div>
            <h2><span className='text-orange-800 font-bold'>Question2:</span>
            Compare SQL and NoSQL databases?
            </h2>
            <p><span className='font-bold'>Answer:</span> SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.</p>
          </div>
          <div>
            <h2><span className='text-orange-800 font-bold'>Question3:</span>
            What is express js? What is Nest JS?
            </h2>
            <p><span className='font-bold'>Answer:</span>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications and Nest. JS is a framework that helps build Node. JS server-side applications. </p>
          </div>
          <div>
            <h2><span className='text-orange-800 font-bold'>Question4:</span>
            What is MongoDB aggregate and how does it work??
            </h2>
            <p><span className='font-bold'>Answer:</span>MangoDB aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    );
};

export default Blog;