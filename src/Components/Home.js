
import { NavLink } from "react-router-dom"
import logo from './logo.svg';

function Home () {
       return (
        <div className="home" >
            
            <h1 className='h1'>The Bikini Bottom Pineapple Condos</h1>
            <h2 className='h2'>Your Home Away From Home</h2>
           
            <img src={logo} className="App-logo" alt="logo" />
            <h4 className='hText'> Whether your looking for a long-term or short-term experience, we invite you stay in our beautiful pineapple condos!</h4>
            <br className='padding'></br>
            <img className='imgH1'  src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b93cc2c-9119-4f9d-8ace-be9f0780000b/defdtsn-157b1301-fefa-4d25-abbe-05c51efb41da.png/v1/fill/w_1280,h_1883,q_80,strp/spongebob_squarepants__pineapple_house_by_mmmarconi365_defdtsn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg4MyIsInBhdGgiOiJcL2ZcLzBiOTNjYzJjLTkxMTktNGY5ZC04YWNlLWJlOWYwNzgwMDAwYlwvZGVmZHRzbi0xNTdiMTMwMS1mZWZhLTRkMjUtYWJiZS0wNWM1MWVmYjQxZGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gdsp3LQMzo4O_23D8DlDJqGCkUiBMQ8N-eWVrsEyLqw' alt='Condo here'/>
            <img className='imgH2'  src='https://static.boredpanda.com/blog/wp-content/uploads/2016/09/spongebob-squarepants-hotel-pineapple-nickelodeon-resort-punta-cana-17.jpg' alt='Interiors'/>
            <img className='imgH3' src= 'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/spongebob-squarepants-hotel-pineapple-nickelodeon-resort-punta-cana-4.jpg' alt='chair'/>
        </div>
   
    )
}

export default Home;