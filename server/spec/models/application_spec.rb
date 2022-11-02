require 'rails_helper'

RSpec.describe Application, type: :model do
  subject {
    described_class.new(
      date: DateTime.now - 100,
      title: "Anything",
      company: "Anything",
      application_method: "Anything",
      response: "Anything",
      comment: "Anything",
    )
  }

  it "has a valid title" do

  end

  it "has a valid company" do

  end

  it "has a valid application_method" do

  end

  it "has a valid response" do

  end

  it "creates a new instance when valid inputs are provided" do
    
  end
end
