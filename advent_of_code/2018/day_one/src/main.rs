use std::fs::File;
use std::io::Read;

fn get_puzzle_input() -> String {
    let mut file = File::open("puzzle_input.txt").unwrap();
    let mut puzzle_input = String::new();

    file.read_to_string(&mut puzzle_input).unwrap();
    puzzle_input
}

fn get_first_repeated(frequency_changes: Vec<i32>) -> i32 {
    let mut found_frequencies = Vec::new();
    let mut sum = 0;

    found_frequencies.push(sum);

    loop {
        for frequency_change in frequency_changes.clone() {
            sum += frequency_change;
            for frequency in &found_frequencies {
                if *frequency == sum {
                    return sum;
                }
            }

            found_frequencies.push(sum);
        }
    }
}

fn main() {
    // Get the puzzle input
    let puzzle_input = get_puzzle_input();
    // for each line
        // convert contents into a number
        // add to a vector
    let frequency_changes: Vec<i32> = puzzle_input.trim().lines().map(|s| s.parse::<i32>().unwrap()).collect();
    // sum the vector
    let sum: i32 = frequency_changes.clone().into_iter().sum();
    // print the results
    println!("sum: {}", sum);
    
    let repeated_frequency = get_first_repeated(frequency_changes);
    println!("repeated: {}", repeated_frequency);
}
