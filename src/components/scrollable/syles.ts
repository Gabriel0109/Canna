import styled from "styled-components";



export const Container = styled.section`
    position: relative;
    margin: 3rem auto;
    max-width: 1320px;
`
export const Content = styled.div`
    @media screen and (min-width: 1440px) {
        .box1{
        width: 45%;
        height: 815px;
        background-color: #3C532B;
    }
    }
    @media screen and (min-width: 1200px) {
    .box1{
        width: 45%;
        height: 680px;
        background-color: #3C532B;
        img{
            width: 100%;
        }
    }

    .box1:hover,
    .box2:hover,
    .box3:hover,
    .box4:hover{
        img{
            opacity: 100%;
        }
    }

    div{
            img{
            /* width: 100%; */
            background-color: #f8f8f8;
            opacity: 0;
            transition: all .4s;
        }
        
    }
    .middle{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-block: 7rem;
    }
    .box2{
        overflow: hidden;
        width: 460px;
        height: 727.06px;
        background-color: #B6546C;
    }
    .box3{
        width: 460px;
        height: 426px;
        background-color: #D0680F;
        z-index: 101;
        overflow: hidden;
        img{
            width: 100%;

        }
    }
    .box4{
        width: 80%;
        height: 400px;
        background-color: #DDD2BA;
        padding: 1rem;
        h1{
            font-family: 'Apercu-Bold';
        }
    }
    }
    @media screen and (max-width: 1199px) {
    .box1{
        width: 45%;
        height: 250px;
        background-color: #3C532B;
        img{
            width: 100%;
        }
    }

    .box1:hover,
    .box2:hover,
    .box3:hover,
    .box4:hover{
        img{
            opacity: 100%;
        }
    }

    div{
            img{
            /* width: 100%; */
            background-color: #f8f8f8;
            opacity: 0;
            transition: all .4s;
        }
        
    }
    .middle{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-block: 7rem;
    }
    .box2{
        overflow: hidden;
        width: 460px;
        height: 727.06px;
        background-color: #B6546C;
    }
    .box3{
        width: 460px;
        height: 192px;
        background-color: #D0680F;
        z-index: 101;
        overflow: hidden;
        img{
            width: 100%;

        }
    }
    .box4{
        width: 80%;
        height: 400px;
        background-color: #DDD2BA;
        padding: 1rem;
        h1{
            font-family: 'Apercu-Bold';
        }
    }
    }

`