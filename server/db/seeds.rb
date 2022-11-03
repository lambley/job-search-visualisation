require 'csv'

# reset database
JobApplication.delete_all

# load csv
application_csv = File.read(Rails.root.join('db','csv', 'jobapplication_seed.csv'))

# create records from csv
p 'reading csv'
data = CSV.parse(application_csv, headers: true,encoding: 'ISO-8859-1')
counter = 0
data.each do |row|
  d = JobApplication.create(
    date: row['date'],
    job_title: row['job_title'],
    company: row['company'],
    application_method: row['application_method'],
    response: row['response'],
    comment: row['comment']
  )
  # print errors if any
  if d.errors.size > 0
    p ''
    puts d.job_title
    puts d.errors
  end

  counter += 1 if d.persisted?
  print '.'
end

p ''
p ">>> #{counter} #{'application'.pluralize(counter)} created"
