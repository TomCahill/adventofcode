use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

fn main() {
    let file = match File::open(FILENAME) {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    let lines = BufReader::new(file).lines();

    let mut total = 0;

    for line in lines {
        if let Ok(value) = line {
            let length = value.len();
            let half = length / 2;

            let container1 = &value[0..half];
            let container2 = &value[half..length];

            let shared: String = container1.chars()
                .filter(|c| container2.contains(*c))
                .collect();

            let sharedCount: i32 = shared.chars()
                .filter(|c| shared.matches(*c).count() < 2)
                .map(|c| {

                    println!("{} = {:?}", c, c.to_digit(36).unwrap());

                    2
                })
                .sum();

            println!("{} + {} = {}", container1, container2, sharedCount);

            total += sharedCount;
        }
    }

    println!();
    println!("Total was: {}", total)

}
