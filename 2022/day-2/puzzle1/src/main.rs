use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

fn main() {
    let file = match File::open(FILENAME) {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    let lines = BufReader::new(file).lines();

    for line in lines {
        if let Ok(value) = line {
            let parsed =  match value.trim().parse::<String>() {
                Ok(value) => value,
                Err(_) => todo!(),
            };
        }

    }
}
