use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

fn char_to_code(c: char) -> u16 {
    let code = c as u16;

    if code >= 65 && code <= 90 { code - 65 + 27 } else { code - 97 + 1 }
}

fn main() {
    let file = match File::open(FILENAME) {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    let lines = BufReader::new(file).lines();

    let mut total = 0;

    for line in lines {
        if let Ok(value) = line {
            let (container1, container2) = value.split_at(value.len() / 2);

            let shared: String = container1.chars()
                .filter(|c| container2.contains(*c))
                .collect();

            let shared_count: u16 = shared.chars()
                .fold(Vec::new(), |mut acc, c| {
                    if !acc.contains(&c) { acc.push(c); }
                    acc
                })
                .iter()
                .copied()
                .map(char_to_code)
                .sum();

            total += shared_count;
        }
    }

    println!();
    println!("Total was: {}", total)

}
