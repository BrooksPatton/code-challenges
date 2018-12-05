struct StarFive {
    puzzle_input: String,
    normalized_input: Option<Vec<Outfit>>
}

impl StarFive {
    fn new(puzzle_input: String) -> StarFive {
        StarFive {
            puzzle_input,
            normalized_input: None
        }
    }

    fn normalize_input(&mut self) {

    }
}

#[derive(Debug)]
struct Outfit {
    id: u32,
    x: u32,
    y: u32,
    width: u32,
    height: u32
}

impl Outfit {
    fn new(id: u32, x: u32, y: u32, width: u32, height: u32) -> Outfit {
        Outfit {
            id,
            x,
            y,
            width,
            height
        }
    }
}

impl std::cmp::PartialEq for Outfit {
    fn eq(&self, o: &Outfit) -> bool {
        self.id == o.id &&
        self.x == o.x &&
        self.y == o.y &&
        self.width == o.width &&
        self.height == o.height
    }
}

#[cfg(test)]
#[test]
fn star_five_new() {
    let test_input = String::from("#1 @ 1,3: 4x4");
    let star_five = StarFive::new(test_input.clone());

    assert_eq!(star_five.puzzle_input, test_input);
}

#[test]
fn outfit_new() {
    let id = 1;
    let x = 1;
    let y = 3;
    let width = 4;
    let height = 4;
    let outfit = Outfit::new(id, x, y, width, height);

    assert_eq!(outfit.id, 1);
    assert_eq!(outfit.x, 1);
    assert_eq!(outfit.y, 3);
    assert_eq!(outfit.width, 4);
    assert_eq!(outfit.height, 4);
}

#[test]
fn normalize_input() {
    let input = String::from("#1 @ 1,3: 4x4");
    let expected_result = Outfit::new(1, 1, 3, 4, 4);
    let mut star_five = StarFive::new(input);
    
    star_five.normalize_input();

    if let Some(outfits) = star_five.normalized_input {
        assert_eq!(outfits[0], expected_result);
    } else {
        panic!("outfit not normalized");
    }
}