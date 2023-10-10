import Header from "../../components/header";

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
          <Header/>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={"Photo of" + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        </>
    );
}