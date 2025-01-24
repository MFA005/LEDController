int redPin = 2;
int greenPin = 5;
int yellowPin = 4;

void setup() 
{ 
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  
  Serial.begin(9600);
}

void loop() {
  
  if (Serial.available() > 0) {
    
    String receivedString = "";
    
    while (Serial.available() > 0) {
      receivedString += char(Serial.read ());
    }
    
    Serial.println(receivedString);
    
    if(receivedString == "r") {
      digitalWrite(redPin,HIGH);  
      digitalWrite(greenPin,LOW);  
      digitalWrite(yellowPin,LOW);  
    }
    if(receivedString == "g") {
     digitalWrite(redPin,LOW);  
      digitalWrite(greenPin,HIGH);  
      digitalWrite(yellowPin,LOW);  
    }

    if(receivedString == "y") {
     digitalWrite(redPin,LOW);  
      digitalWrite(greenPin,LOW);  
      digitalWrite(yellowPin,HIGH);    
    }
    if(receivedString == "o") {
     digitalWrite(redPin,LOW);  
      digitalWrite(greenPin,LOW);  
      digitalWrite(yellowPin,LOW);    
    }
    
  }

}