use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

fn main() {
    let file = match File::open(FILENAME) {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    let lines = BufReader::new(file).lines();

    let mut highest_scores: [i32; 3] = [0; 3];
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

        let mut last: i32 = 0;
        let mut should_shift: bool = false;
        for idx in 0..3 {
            if should_shift {
                highest_scores[idx] = last;
            } else if highest_scores[idx] < running_total {
                last = highest_scores[idx];
                highest_scores[idx] = running_total;
                should_shift = true;
            }
        }
    }

    let total: i32 = highest_scores.iter().sum();

    print!("\nThe highest amount of Calories an elf is carrying is {:?}, total: {}\n", highest_scores, total);
}
