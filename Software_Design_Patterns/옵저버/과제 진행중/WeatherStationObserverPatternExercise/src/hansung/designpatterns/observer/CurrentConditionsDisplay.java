package hansung.designpatterns.observer;

import java.util.Date;

public class CurrentConditionsDisplay implements Observer, DisplayElement {

	private float temperature;
	private  float humidity;
	private  Subject weatherData;
	private String measuredTime;

	public CurrentConditionsDisplay(Subject weatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);

	}
	public void update(Subject subject) {
		if(weatherData instanceof Subject){
			TimedWeatherData weatherData = (TimedWeatherData) subject;
			this.temperature = weatherData.getTemperature();
			this.humidity = weatherData.getHumidity();
			this.measuredTime = weatherData.getMeasuredTime();
		}
		//this.temperature = temperature;
		//this.humidity = humidity;
		display();
	}
	public void display() {
		System.out.println("[Time] :" + measuredTime);
		System.out.println("Current conditions: " + temperature
			+ "F degrees and " + humidity + "% humidity");
	}
}
