use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

fn main() {
    let file = match File::open(FILENAME) {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    let lines = BufReader::new(file).lines();

    let mut highest_score: i32 = 0;
    let mut running_total: i32 = 0;

    for line in lines {
        if let Ok(value) = line {
            let parsed = value.trim().parse::<i32>();
            if parsed.is_err() {
                print!("Anon Elf has is carrying {} Calories with of food\n", running_total);
                running_total = 0;
            } else {
                running_total = running_total + parsed.unwrap();
            }
        }

        if highest_score < running_total {
            highest_score = running_total;
        }
    }

    print!("\nThe highest amount of Calories an elf is carrying is {}\n", running_total);
}
