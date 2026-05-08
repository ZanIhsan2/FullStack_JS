const e = React.createElement;
// memanggil library React untuk membuat element baru 

// ... the starter code you pasted ...

function LikeButton() {
    const [like, setLiked] = React.useState(false);
    // useState adalah library untuk menyimpan proses
    if(like){
        return e('p', null, 'you liked this.');
    }
    // Proses dari tombol
    return e(
        'button',
        { onClick: ()=> setLiked(true)},
        'Like'
    );
}
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
