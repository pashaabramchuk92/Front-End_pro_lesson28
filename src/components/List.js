import React from 'react';

const List = ({ items }) => {
    return (
        <ul>
            {
                items.map((post, index) => {
                    if(post) {
                        console.log(post[index].title);

                    }
                    // return(
                    //     <li key={index}>
                    //         <h2>{post[index].title}</h2>
                    //         <p>{post[index].text}</p>
                    //         <span>{post[index].select}</span>
                    //     </li>
                    // )
                })
            }
        </ul>
    );
}

export default List;