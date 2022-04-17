import React from "react";

const Blogs = () => {
  return (
    <div className="p-4">
      <h3>1. Difference between authorization and authentication</h3>
      <p>
        Authentication is a process to verify who the user and Authorization is
        the process what recourses a user can use.Authentication is the first
        step of identity and Authorization is always take place after
        authentication.Once a user complete Authentication user can use the
        website but Authorization can handle what a user can use in the website.
      </p>
      <hr />
      <h3>
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h3>
      <p>
        Firebase is make our development easier. It crated by google.I use
        firebase for make my website authentication implement.It's have high
        secure authentication system thats why it save my many times. Firebase
        give us 12 types of sign in method. The other option will be creating
        own authentication system but its harder for a junior developer.
      </p>
      <hr />
      <h3>
        3. What other services does firebase provide other than authentication
      </h3>
      <p>
        Firebase provide us authentication, hosting, realtime database, storage,
        google analytics, prediction, cloud messaging etc.Firebase didn't give
        us open source.Firebase only supported Google cloud hosting.Firebase is
        faster then other.Firebase also cheaper then other.Firebase setup
        backend more easily.Firebase provide fast startup.
      </p>
    </div>
  );
};

export default Blogs;
