import { Box, Button, Container, Grid, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

function BMICalculator() {
  const [ weight, setWeight ] = useState("");
  const [ height, setHeight ] = useState("");
  const [ bmi, setBmi ] = useState({ bmiValue:0, status:""});
  const [ display, setDisplay ] = useState(false);

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      alert("Please enter weight and height.");
      return;
    }
    const heightInMeter = Number(height) / 100;
    const bmiValueCal = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    let status = "";
    if (bmiValueCal < 18.5) {
      status = "Underweight";
    } else if (bmiValueCal < 25) {
      status = "Healthy";
    } else if (bmiValueCal < 30) {
      status = "Overweight";
    }else{
      status = "Overweight";
    }
    setBmi({ bmiValue: bmiValueCal, status:status });
    setDisplay(true);
  }

  const resetCalculator = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setBmi({ bmiValue: 0, status: "" });
    setDisplay(false);
  }

  const showColor = () => {
    if(bmi.status==="Underweight") return "blue" ;
    if(bmi.status==="Healthy") return "green" ;
    return "red" ;
  }

  return <Box as={Container} >
    <Heading textAlign={"center"}> BMI Calculator </Heading>
    <SimpleGrid className="bmi-form" columns={2} margin={"auto"}>
      <Box>
        <Text as={Input} className="weight" type="number" placeholder="Weight (kg)" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </Box>

      <Box>
        <Text as={Input} className="height" type="number" placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Box>

    </SimpleGrid>
    
    <Button colorScheme='teal' variant='solid' onClick={(e)=>calculateBmi(e)}>Calculate</Button>
    <Button colorScheme='red' onClick={(e)=>resetCalculator(e)}>Reset</Button>

    { display &&
      <Grid className="bmi-result">
        <Text className="bmi-value">{ "Your BMI: " + bmi.bmiValue}</Text>
        <Text color={showColor()} className="bmi-status">{bmi.status}</Text>
      </Grid>
    }
  </Box>;
}

export default BMICalculator;