use std::{fs::File, io::{BufReader, BufRead}};

const FILENAME: &str = "../input.txt";

#[derive(Debug, Copy, Clone)]
enum HAND {
    ROCK = 1,
    PAPER,
    SCISSORS
}
#[derive(Debug, PartialEq)]
enum OUTCOME {
    LOSE = 0,
    DRAW = 3,
    WIN = 6
}

fn map_hand(hand_char: &str) -> HAND {
    match hand_char {
        "A" => HAND::ROCK,
        "B" => HAND::PAPER,
        "C" => HAND::SCISSORS,
        _ => panic!("Uknown hand: {}", hand_char)
    }
}
fn map_outcome(hand_char: &str) -> OUTCOME {
    match hand_char {
        "X" => OUTCOME::LOSE,
        "Y" => OUTCOME::DRAW,
        "Z" => OUTCOME::WIN,
        _ => panic!("Uknown outcome: {}", hand_char)
    }
}

fn hand_resolver(hand: &HAND, outcome: OUTCOME) -> HAND {
    match hand {
        HAND::ROCK => if outcome == OUTCOME::WIN { HAND::PAPER } else { HAND::SCISSORS },
        HAND::PAPER => if outcome == OUTCOME::WIN { HAND::SCISSORS } else { HAND::ROCK },
        HAND::SCISSORS => if outcome == OUTCOME::WIN { HAND::ROCK } else { HAND::PAPER },
    }
}

fn check_score(my_hand: HAND, outcome: OUTCOME) -> u8 {
    my_hand as u8 + outcome as u8
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
            let hands = value
                .as_str()
                .split_whitespace()
                .collect::<Vec<_>>();

            let opponents_hand = map_hand(hands[0]);
            let outcome = map_outcome(hands[1]);

            let my_hand = match outcome {
                OUTCOME::WIN => hand_resolver(&opponents_hand, OUTCOME::WIN),
                OUTCOME::LOSE => hand_resolver(&opponents_hand, OUTCOME::LOSE),
                OUTCOME::DRAW => opponents_hand,
            };

            println!("{:?} vs {:?} = {:?}", opponents_hand, my_hand, outcome);

            total += check_score(my_hand, outcome) as u32;
        }
    }

    println!("The total score was: {}", total);
}
