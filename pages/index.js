import config from "../config.json";
import styled from "styled-components";


function HomePage() {
    // const mensagem = 'Bem vindo ao Aluratube!';
    const estilosDaHomePage = { background: 'red' };



    return (
        <div style={estilosDaHomePage}>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
    )
}

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}

            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} />
                {config.name}
                {config.job}
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <div>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}