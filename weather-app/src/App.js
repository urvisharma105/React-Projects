import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import MyChart from "./Components/MyChart"

const API_KEY = "bfc96d30ddfbf85c283c9b425a83a03a";

class App extends React.Component {

    state = {
        temperature: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: undefined,
        chartData: {
            labels:['6:00 AM','9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'],
            datasets:[
                {
                    label:'Temperature',
                    data:[10,20, 5, 40, 50, 23],
                    backgroundColor:['rgba(255,99,132,1)', 'rgba(54,162,235,1)']
                }
            ]
        }
    }

    getWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const countrycode = event.target.elements.countrycode.value;

        const api_data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_data.json();

        /*Data for the chart*/
        
        const chart_api_data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countrycode}&appid=${API_KEY}`);
        const chart_data = await chart_api_data.json();
        

        if(city && country && countrycode)
        {
            this.setState({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                city: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                error: undefined,
                chartData: {
                    labels:['6:00 AM','9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'],
                    datasets:[
                        {
                            label:'Temperature',
                            data:[
                                chart_data.list[0].main.temp - 273.15,
                                chart_data.list[1].main.temp - 273.15, 
                                chart_data.list[2].main.temp - 273.15,
                                chart_data.list[3].main.temp - 273.15,
                                chart_data.list[4].main.temp - 273.15,
                                chart_data.list[5].main.temp - 273.15
                            ],
                            backgroundColor:['rgba(255,99,132,1)', 'rgba(54,162,235,1)']
                        }
                    ]
                }
            });
            console.log(data);
        }
        else
        {
            this.setState({
                temperature: undefined,
                humidity: undefined,
                city: undefined,
                country: undefined,
                description: undefined,
                error: "*Please enter the value",
            });
        }
    }

    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form 
                                        getWeather = {this.getWeather}
                                    />
                                    <Weather 
                                        temperature= {this.state.temperature}
                                        humidity= {this.state.humidity}
                                        city= {this.state.city}
                                        country= {this.state.country}
                                        description= {this.state.description}
                                        error= {this.state.error} 
                                    />
                                    <MyChart 
                                        city = {this.state.city}
                                        country = {this.state.country} 
                                        chartData = {this.state.chartData} 
                                    /> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
