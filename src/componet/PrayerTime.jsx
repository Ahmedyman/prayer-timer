// import React from "react";
// import Grid from "@mui/material/Unstable_Grid2";
// import Divider from "@mui/material/Divider";
// import Stack from "@mui/material/Stack";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import axios from "axios";
// import moment from "moment";
// import { useState, useEffect } from "react";
// import "moment/dist/locale/ar-dz";
// moment.locale("ar");
// import ActionAreaCard from "../MainCards";

// export default function PrayerTime() {
//   const [nextPrayerIndex,setNextPrayerIndex]=useState(1)
//   const [remainingTime,setRemainingTime]=useState("");
//   const [selectedCity, setSelectedCity] = useState({
//     diplyName: "القاهره",
//     apiName: "Cairo"
//   });

//   const [timings, setTimings] = useState({
//     Fajr: "05:12",
//     Dhuhr: "12:30",
//     Asr: "15:52",
//     Maghrib: "18:25",
//     Isha: "19:55"
//   });
 
//   const prayersArray=[{key: "fajr", diplyName: "الفجر"},
//     {key: "dhuhr", diplyName: "الضهر"},
//     {key: "asr", diplyName: "العصر"},
//     {key: "maghrib", diplyName: "المغرب"},
//     {key: "isha", diplyName: "العشاء"}
//   ]
//   const  avilableCities  = [
//     {
//       diplyName: "القاهره",
//       apiName: "Cairo"
//     },
//     {
//       diplyName: "مكه المكرمه",
//       apiName: "makah"
//     },
//     {
//       diplyName: "المدينه",
//       apiName: "el madina"
//     },
//     {
//       diplyName: "البحيره",
//       apiName: "elbihira"
//     }
//   ];
// const [today,setToday]=useState("")
//   const getTimings = async () => {
//     const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
//       params: {
//         city: selectedCity.apiName,
//         country: "Egypt", // Adjust the country as needed
//         method: 2 // Adjust the method as needed
//       }
//     });
//     setTimings(response.data.data.timings);
//   };

//   useEffect(() => {
//     getTimings();
//     const t=moment()
//     setToday(t.format('h:mm  LL'))
//     // console.log("the time is ",t.format)
//   }, [selectedCity]);
//   useEffect(() => {
// 		let interval = setInterval(() => {
// 			console.log("calling timer");
// 			setupCountdownTimer();
// 		}, 1000);

// 		const t = moment();
// 		setToday(t.format("MMM Do YYYY | h:mm"));

// 		return () => {
// 			clearInterval(interval);
// 		};
// 	}, [timings]);

// 	// const data = await axios.get(
// 	// 	"https://api.aladhan.com/v1/timingsByCity?country=SA&city=Riyadh"
// 	// );

// 	const setupCountdownTimer = () => {
// 		const momentNow = moment();

// 		let prayerIndex = 2;

// 		if (
// 			momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
// 			momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
// 		) {
// 			prayerIndex = 1;
// 		} else if (
// 			momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
// 			momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
// 		) {
// 			prayerIndex = 2;
// 		} else if (
// 			momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
// 			momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
// 		) {
// 			prayerIndex = 3;
// 		} else if (
// 			momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
// 			momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
// 		) {
// 			prayerIndex = 4;
// 		} else {
// 			prayerIndex = 0;
// 		}

// 		setNextPrayerIndex(prayerIndex);

  
//     const nextPrayerObject = prayersArray[prayerIndex];
// 		const nextPrayerTime = timings[nextPrayerObject.key];
//     const nextPrayerTimeMoment = moment(nextPrayerTime, "HH:mm");

// 		let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

// 		if (remainingTime < 0) {
// 			const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
// 			const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
// 				moment("00:00:00", "hh:mm:ss")
// 			);

// 			const totalDiffernce = midnightDiff + fajrToMidnightDiff;

// 			remainingTime = totalDiffernce;
// 		}
// 		console.log(remainingTime);

// 		const durationRemainingTime = moment.duration(remainingTime);

// 		setRemainingTime(
// 			`${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
// 		);
// 		console.log(
// 			"duration issss ",
// 			durationRemainingTime.hours(),
// 			durationRemainingTime.minutes(),
// 			durationRemainingTime.seconds()
// 		);
// 	};
// 	const handleCityChange = (event) => {
// 		const cityObject = avilableCities.find((city) => {
// 			return city.apiName == event.target.value;
// 		});
// 		console.log("the new value is ", event.target.value);
// 		setSelectedCity(cityObject);
// 	};

//   return (
//     <>
//       <Grid container>
//         <Grid item xs={6}>
//           <div>
//             <h1>{selectedCity.diplyName}</h1>
//             <p>{today}</p>
//           </div>
//         </Grid>
//         <Grid item xs={6}>
//           <div>
//             <h1>متبقي حتي صلاة {prayersArray[nextPrayerIndex].diplyName}</h1>
//             <p>{remainingTime}</p>
//           </div>
//         </Grid>
//       </Grid>
//       <Divider style={{ borderColor: "white" }} />

//       <Stack
//         direction="row"
//         justifyContent={"space-around"}
//         style={{ marginTop: "50px" }}
//       >
//         <ActionAreaCard
//           image="../../public/1b9fef12-4b63-4a47-a9be-f5c8daced2f2.jpeg"
//           time={timings.Fajr}
//           name="الفجر"
//         />
//         <ActionAreaCard
//           image="../../public/4f149180-ee67-4327-b6b9-fda34814ce12.jpeg"
//           time={timings.Dhuhr}
//           name="الضهر"
//         />
//         <ActionAreaCard
//           image="../../public/الجامع الازهر.jpeg"
//           time={timings.Asr}
//           name="العصر"
//         />
//         <ActionAreaCard
//           image="../../public/Ramadan2016اذان المغرب.jpeg"
//           time={timings.Maghrib}
//           name="المغرب"
//         />
//         <ActionAreaCard
//           image="../../public/جامع عمرو بن العاص بمصر القديمه   BY_ Amr Roshody.jpeg"
//                     time={timings.Isha}
//           name="العشاء"
//         />
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent={"center"}
//         style={{ marginTop: "20px" }}
//       >
//         <FormControl style={{ width: "20%" }}>
//           <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>
//             المدينه
//           </InputLabel>
//           <Select
//             style={{ color: "white" }}
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             onChange={handleCityChange}
//             value={selectedCity.apiName || ''}
//           >
//             { avilableCities .map((city) => (
//               <MenuItem key={city.apiName} value={city.apiName}>
//                 {city.diplyName}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Stack>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import moment from "moment";
import "moment/dist/locale/ar";
import ActionAreaCard from "../MainCards"; // Adjust the import based on your file structure

moment.locale("ar");

export default function PrayerTime() {
    // STATES
    const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
    const [timings, setTimings] = useState({
        Fajr: "05:12",
        Dhuhr: "12:30",
        Asr: "15:52",
        Maghrib: "18:25",
        Isha: "19:55"
    });
    const [remainingTime, setRemainingTime] = useState("");
    const [selectedCity, setSelectedCity] = useState({
        displayName: "القاهره",
        apiName: "Cairo"
    });
    const [today, setToday] = useState("");

    const availableCities = [
        { displayName: "القاهره", apiName: "Cairo" },
        { displayName: "مكه المكرمه", apiName: "Makkah" },
        { displayName: "المدينه", apiName: "Medina" },
        { displayName: "البحيره", apiName: "Beheira" }
    ];

    const prayersArray = [
        { key: "Fajr", displayName: "الفجر" },
        { key: "Dhuhr", displayName: "الضهر" },
        { key: "Asr", displayName: "العصر" },
        { key: "Maghrib", displayName: "المغرب" },
        { key: "Isha", displayName: "العشاء" }
    ];

    const getTimings = async () => {
        try {
            const response = await axios.get(
                "https://api.aladhan.com/v1/timingsByCity",
                {
                    params: {
                        city: selectedCity.apiName,
                        country: "Egypt", // Adjust as needed
                        method: 2 // Adjust the method if necessary
                    }
                }
            );
            setTimings(response.data.data.timings);
        } catch (error) {
            console.error("Failed to fetch timings:", error);
        }
    };

    useEffect(() => {
        getTimings();
    }, [selectedCity]);

    useEffect(() => {
        const interval = setInterval(() => {
            setupCountdownTimer();
        }, 1000);

        const t = moment();
        setToday(t.format(" Do MMM  YYYY | h:mm"));

        return () => clearInterval(interval);
    }, [timings]);

    const setupCountdownTimer = () => {
        const momentNow = moment();
        let prayerIndex = 0;

        for (let i = 0; i < prayersArray.length; i++) {
            const prayerTime = moment(timings[prayersArray[i].key], "HH:mm");
            if (momentNow.isBefore(prayerTime)) {
                prayerIndex = i;
                break;
            }
        }

        setNextPrayerIndex(prayerIndex);

        const nextPrayerObject = prayersArray[prayerIndex];
        const nextPrayerTime = timings[nextPrayerObject.key];
        const nextPrayerTimeMoment = moment(nextPrayerTime, "HH:mm");

        let remainingTime = nextPrayerTimeMoment.diff(momentNow);

        if (remainingTime < 0) {
            const nextDay = moment().add(1, "day").startOf("day");
            remainingTime = nextPrayerTimeMoment.add(1, "day").diff(momentNow);
        }

        const durationRemainingTime = moment.duration(remainingTime);
        setRemainingTime(
            `${durationRemainingTime.hours()}:${durationRemainingTime.minutes()}:${durationRemainingTime.seconds()}`
        );
    };

    const handleCityChange = (event) => {
        const cityObject = availableCities.find((city) => city.apiName === event.target.value);
        setSelectedCity(cityObject);
    };

    return (
        <>
            {/* TOP ROW */}
            <Grid container>
                <Grid xs={6}>
                    <div>
                        <h2 style={{color:"black",fontSize:"40px"}}>{today}</h2>
                        <h1 style={{color:"black",fontSize:"40px"}}>{selectedCity.displayName}</h1>
                    </div>
                </Grid>
                <Grid xs={6}>
                    <div>
                        <h2 style={{color:"black",fontSize:"40px"}} >
                            متبقي حتي صلاة {prayersArray[nextPrayerIndex].displayName}
                        </h2>
                        <h1 style={{color:"black",fontSize:"40px"}}>{remainingTime}</h1>
                    </div>
                </Grid>
            </Grid>
            {/*== TOP ROW ==*/}

            <Divider style={{ borderColor: "black", opacity: "0.2",marginTop:"10px" }} />

            {/* PRAYERS CARDS */}
            <Stack
                direction="row"
                justifyContent="space-around"
                style={{ marginTop: "50px" }}
            >
                      <ActionAreaCard
          image="../../public/1b9fef12-4b63-4a47-a9be-f5c8daced2f2.jpeg"
          time={timings.Fajr}
          name="الفجر"
        />
        <ActionAreaCard
          image="../../public/4f149180-ee67-4327-b6b9-fda34814ce12.jpeg"
          time={timings.Dhuhr}
          name="الضهر"
        />
        <ActionAreaCard
          image="../../public/الجامع الازهر.jpeg"
          time={timings.Asr}
          name="العصر"
        />
        <ActionAreaCard
          image="../../public/Ramadan2016اذان المغرب.jpeg"
          time={timings.Maghrib}
          name="المغرب"
        />
        <ActionAreaCard
          image="../../public/جامع عمرو بن العاص بمصر القديمه   BY_ Amr Roshody.jpeg"
                    time={timings.Isha}
          name="العشاء"
        />
          
            </Stack>
            {/*== PRAYERS CARDS ==*/}

            {/* SELECT CITY */}
            <Stack
                direction="row"
                justifyContent="center"
                style={{ marginTop: "40px" }}
            >
                <FormControl style={{ width: "20%" }}>
                    <InputLabel id="city-select-label">
                        <span style={{ color: "black" ,fontSize: "30px",fontWeight:"bold" }}>المدينة</span>
                    </InputLabel>
                    <Select
                    className="selectItem"
                        labelId="city-select-label"
                        id="city-select"
                        value={selectedCity.apiName}
                        onChange={handleCityChange}
                    >
                        {availableCities.map((city) => (
                            <MenuItem
                            
                            
                                key={city.apiName}
                                value={city.apiName}
                            >
                                {city.displayName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
        </>
    );
}
