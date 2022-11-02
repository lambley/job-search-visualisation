require 'rails_helper'

RSpec.describe Application, type: :model do
  subject {
    described_class.new(
      date: DateTime.now - 100,
      job_title: "Anything",
      company: "Anything",
      application_method: "Anything",
      response: "Anything",
      comment: "Anything",
    )
  }

  it "has a valid title" do
    subject.job_title = nil
    expect(subject).to_not be_valid
  end

  it "has a valid company" do
    subject.company = nil
    expect(subject).to_not be_valid
  end

  it "has a valid application_method" do
    subject.application_method = nil
    expect(subject).to_not be_valid
  end

  it "has a valid response" do
    subject.response = nil
    expect(subject).to_not be_valid
  end

  it "creates a new instance when valid inputs are provided" do
    expect(subject).to be_valid
  end
end
