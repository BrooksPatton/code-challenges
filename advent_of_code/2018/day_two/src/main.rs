use std::fs::File;
use std::io::prelude::*;
use std::collections::HashMap;

struct Counts {
    two: u32,
    three: u32
}

impl Counts {
    fn new() -> Counts {
        Counts {
            two: 0,
            three: 0
        }
    }

    fn increment_two(&mut self) {
        self.two += 1;
    }

    fn increment_three(&mut self) {
        self.three += 1;
    }
}

fn get_input_file(file_name: &str) -> String {
    let mut file = File::open(file_name).unwrap();
    let mut result = String::new();

    file.read_to_string(&mut result).unwrap();
    result
}

fn main() {
    // get the file
    let puzzle_input = get_input_file("puzzle_input");
    let lines: Vec<&str> = puzzle_input.trim().lines().collect();
    // count the repeating letters
    let mut counts = Counts::new();

    for line in lines {
        let mut letters = HashMap::new();
        
        for c in line.chars() {
            let counter = letters.entry(c).or_insert(0);
            *counter += 1;
        }
        // increment the two counts
        // increment the three counts
        let mut got_two = false;
        let mut got_three = false;

        for (_letter, count) in letters.iter() {
            if !got_two && *count == 2 {
                counts.increment_two();
                got_two = true;
            } else if !got_three && *count == 3 {
                counts.increment_three();
                got_three = true;
            }
        }
    }
    // multiply them together
    println!("hash: {}", counts.two * counts.three);
}
