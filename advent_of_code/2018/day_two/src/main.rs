use std::fs::File;
use std::io::Read;

struct PartTwo {
    puzzle_input: Vec<String>,
    matching_boxes: Option<(String, String)>
}

impl PartTwo {
    fn new(file_name: &str) -> PartTwo {
        let mut file = File::open(file_name).unwrap();
        let mut puzzle_input = String::new();

        file.read_to_string(&mut puzzle_input).unwrap();

        let puzzle_input: Vec<String> = puzzle_input.trim().lines().map(|s| String::from(s)).collect();
        let matching_boxes = None;

        PartTwo {
            puzzle_input,
            matching_boxes
        }
    }

    fn find_correct_boxes(&mut self) {
        for (index, first_box) in self.puzzle_input.clone().iter().enumerate() {
            self.matches(first_box.to_owned(), index);
        }
    }

    fn matches(&mut self, first_box: String, index: usize) {
        let mut i = index + 1;

        for _ in i..self.puzzle_input.len() {
            let other_box = self.puzzle_input[i].to_owned();
            
            if self.is_matching_box(first_box.clone(), other_box.clone()) {
                self.matching_boxes = Some((first_box.clone(), other_box.clone()));
            }
            i += 1;
        }
    }

    fn is_matching_box(&self, first_box: String, second_box: String) -> bool {
        let first: Vec<char> = first_box.chars().collect();
        let second: Vec<char> = second_box.chars().collect();
        let mut off_character_count = 0;

        for (index, first_letter) in first.iter().enumerate() {
            let second_letter = second[index];

            if *first_letter != second_letter {
                off_character_count += 1;
            }
        }

        off_character_count <= 1
    }

    fn get_correct_box_id(&self) -> Result<String, String> {
        match self.matching_boxes {
            Some((ref first, ref second)) => {
                let mut result = String::new();
                let first_letters: Vec<char> = first.chars().collect();
                let second_letters: Vec<char> = second.chars().collect();

                for (index, first_letter) in first_letters.iter().enumerate() {
                    if *first_letter == second_letters[index] {
                        result.push(*first_letter);
                    }
                }

                Ok(result)
            },
            _ => Err(String::from("no match found"))
        }
    }
}

fn main() {
    let mut part_two = PartTwo::new("puzzle_input");

    part_two.find_correct_boxes();

    let correct_box = part_two.get_correct_box_id().unwrap();

    println!("{}", correct_box);
}