
import 'bootstrap/dist/css/bootstrap.min.css';



const List = () => {

    type Car = {
        id: number;
        year: number;
        name: string;
        color: string;
    };
      
    const motor: Car[] = [
        { id :1, year: 2022, name: "Toyota Camry", color: "White" },
        { id :2, year: 2020, name: "Honda Accord", color: "Black" },
        { id :3, year: 2019, name: "Tesla Model 3", color: "Red" },
        { id :4, year: 2021, name: "Ford Mustang", color: "Blue" },
        { id :5, year: 2018, name: "Chevrolet Malibu", color: "Silver" },
        { id :6, year: 2017, name: "BMW 3 Series", color: "Gray" },
        { id :7, year: 2023, name: "Audi A4", color: "White" },
        { id :8, year: 2016, name: "Mercedes-Benz C-Class", color: "Black" },
        { id :9, year: 2019, name: "Volkswagen Passat", color: "Blue" },
        { id :10, year: 2021, name: "Mazda 6", color: "Red" }
    ];

    
    
    
    return (
        <div className='container'>List <br />
          <ul className="list-group">
            {motor.map((item) => (
                <li 
                className={`list-group-item ${item.id === 1 ? "active" : ""}`} 
                key={item.id}
                >
                {item.name}
                </li>
            ))}
            <br />
            </ul>

      </div>
  )
}

export default List