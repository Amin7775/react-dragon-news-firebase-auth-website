import moment from 'moment';
import logo from './../../../assets/logo.png'

const Header = () => {

    const time = moment().format('dddd, MMMM Do YYYY');
    
    return (
        <div className='flex flex-col items-center py-5'>
            <img className='mt-4' src={logo} alt="" />
            <p className='mt-6 text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
            <p className='mt-3 text-[#706F6F]'>{time}</p>
        </div>
    );
};

export default Header;