package hansung.designpatterns.observer;
import java.util.Date;


public class TimedWeatherData extends WeatherData {

    public String measuredTime;

    public void setMeasurements(float temperature, float humidity, float pressure){
        super.setMeasurements(temperature,humidity,pressure);
        measuredTime = new Date().toString();
    }

    public String getMeasuredTime(){
        return measuredTime;
    }


    }

