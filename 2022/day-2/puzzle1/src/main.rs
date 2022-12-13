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

fn check_score(round: Vec<HAND>) -> i32 {
    let hand_score = round[1] as i8;

    let compare = round[0] as i8 - hand_score;

    0
}

fn main() {
    let file = match File::open(FILENAME) {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };

    let lines = BufReader::new(file).lines();

    for line in lines {
        if let Ok(value) = line {
            let round = value
                .as_str()
                .split_whitespace()
                .map(map_hand)
                .collect::<Vec<_>>();

            check_score(round);

            // for round in split {
            // println!("{:?}", split)
            // }

            // let scores = split
            //     .map(map_score);

            // println!("{:?}", split);
        }

    }
}
