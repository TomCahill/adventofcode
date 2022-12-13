use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

#[derive(Debug, Copy, Clone)]
enum HAND {
    ROCK = 1,
    PAPER,
    SCISSORS
}

// Scoring:
// Win - 6
// Draw - 3
// Loss - 0

fn map_hand(hand_char: &str) -> HAND {
    match hand_char {
        "A" | "X" => HAND::ROCK,
        "B" | "Y" => HAND::PAPER,
        "C" | "Z" => HAND::SCISSORS,
        _ => panic!("Uknown hand: {}", hand_char)
    }
}

fn check_score(round: &Vec<HAND>) -> u8 {
    let hand_score = round[1] as u8;

    let result: u8 = match (round[0], round[1]) {
        (HAND::ROCK, HAND::PAPER) | (HAND::PAPER, HAND::SCISSORS) | (HAND::SCISSORS, HAND::ROCK) => 6,
        (HAND::ROCK, HAND::SCISSORS) | (HAND::PAPER, HAND::ROCK) | (HAND::SCISSORS, HAND::PAPER) => 0,
        _ => 3
    };

    hand_score + result
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
            let round = value
                .as_str()
                .split_whitespace()
                .map(map_hand)
                .collect::<Vec<_>>();

            let score = check_score(&round);

            total += score as u32;
        }
    }

    println!("The total score was: {}", total);
}
