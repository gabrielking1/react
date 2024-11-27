
import 'bootstrap/dist/css/bootstrap.min.css';

const Click = () => {
    const Country = [
        'Nigeria',
        'England',
        'Portugal',
        'Spain',
        'Finland',
        'Luxembourg',
        'Estonia'
    ]
 
  return (
    <div className='container'>List <br />
          <ul className="list-group">
            {Country.map((item) => (
                <li className='list-group-item'>
                {item}
                </li>
            ))}
            <br />
            </ul>

      </div>
  )
}

export default Click