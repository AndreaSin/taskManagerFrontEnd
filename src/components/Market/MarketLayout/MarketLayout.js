import React from 'react';


const layout = (props) => (
  <div>
    <div> SideDrawer </div>
    <main>
      {props.children}
    </main>
    <div> Footer </div>
  </div>
);

export default layout;
