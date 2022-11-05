require 'csv'

# reset database
JobApplication.delete_all

# load csv
application_csv = File.read(Rails.root.join('db', 'csv', 'jobapplication_seed.csv'))

# create records from csv
p 'reading csv'
data = CSV.parse(application_csv, headers: true, encoding: 'ISO-8859-1')
counter = 0
data.each do |row|
  d = JobApplication.create(
    date: row['date'],
    job_title: row['job_title'],
    company: row['company'],
    application_method: row['application_method'],
    initial_response: row['initial_response'].to_s.downcase,
    first_interview: row['first_interview'].to_s.downcase,
    technical_task: row['technical_task'].to_s.downcase,
    second_interview: row['second_interview'].to_s.downcase,
    offer_received: row['offer_received'].to_s.downcase,
    offer_accepted: row['offer_accepted'].to_s.downcase
  )
  # print errors if any
  if d.errors.size > 0
    p ''
    puts "Error creating #{d.job_title}"
    d.errors.each { |error| puts "Error: #{error.type} - #{error.options}" }
  end

  counter += 1 if d.persisted?
  print '.'
end

p ''
p ">>> #{counter} #{'application'.pluralize(counter)} created"
